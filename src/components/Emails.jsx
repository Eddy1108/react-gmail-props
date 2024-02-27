import Email from "./Email"
import EmailView from "./EmailView"

import { useState } from "react"


function Emails({emails, setEmails, hideRead, setHideRead, currentTab, setCurrentTab, searchInput})
{

    const [emailData, setEmailData] = useState()

    const getReadEmails = emails => emails.filter(email => !email.read)

    const getStarredEmails = emails => emails.filter(email => email.starred)

    const getSearchedEmails = emails => emails.filter(email => email.title.includes(searchInput))

  let filteredEmails = emails


  if (searchInput != '') filteredEmails = getSearchedEmails(filteredEmails)


  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

    //console.log(filteredEmails)

    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
        setEmails(updatedEmails)
      }
    
      const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        setEmails(updatedEmails)
      }


  return <main className="emails">
  {emailData ? <EmailView emailData={emailData} setEmailData={setEmailData}/> : 
  <ul>
    {filteredEmails.map((email, index) => (
      <Email email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} setEmailData={setEmailData}/>
    ))}
  </ul>
  }
  </main>
}

export default Emails