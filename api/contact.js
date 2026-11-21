const MAX_BODY = 12000
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req,res) {
  res.setHeader('Cache-Control','no-store')
  if(req.method!=='POST') {res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed'})}
  if(!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) return res.status(503).json({error:'Online enquiries are not configured yet. Please contact the foundation by phone.'})
  const size=Number(req.headers['content-length']||0)
  if(size>MAX_BODY) return res.status(413).json({error:'Message is too large'})
  const {name,email,phone='',message,website=''}=req.body||{}
  if(website) return res.status(200).json({ok:true})
  if(typeof name!=='string'||!name.trim()||name.length>120||typeof email!=='string'||email.length>254||!emailPattern.test(email)||typeof phone!=='string'||phone.length>30||typeof message!=='string'||!message.trim()||message.length>4000) return res.status(400).json({error:'Please check the name, email and message fields.'})
  const clean=s=>s.replace(/[<>]/g,'').trim()
  try {
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL,to:[process.env.CONTACT_TO_EMAIL],reply_to:email,subject:'Heera World enquiry',text:['Name: '+clean(name),'Email: '+email,'Phone: '+clean(phone),'','Message:',clean(message)].join('\n')})})
    if(!response.ok) return res.status(502).json({error:'We could not deliver your enquiry. Please contact the foundation by phone.'})
    return res.status(200).json({ok:true})
  } catch {return res.status(502).json({error:'We could not deliver your enquiry. Please contact the foundation by phone.'})}
}
