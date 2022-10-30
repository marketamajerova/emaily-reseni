export const Email = (props) => {
  const { senderName, subject, time, unread } = props;

  const emailElement = document.createElement('div');
  emailElement.classList.add('email');

  let iconClass = 'opened';
  
  if (unread) {
    iconClass = 'closed';
  };

  emailElement.innerHTML = `
        <div class="email__head">
          <button class="email__icon email__icon--${iconClass}"></button>
          <div class="email__info">
            <div class="email__sender">${senderName}</div>
            <div class="email__subject">${subject}</div>
          </div>
          <div class="email__time">${time}</div>
        </div>
        <div class="email__body"></div>
    `; 

  return emailElement; 
}

// export const Email = () => {
//     const { senderName, subject, time, unread } = props;

//     const emailElement = document.createElement('div');
//     emailElement.classList.add('email');

//     emailElement.innerHTML = `
//           <div class="email__head">
//             <button class="email__icon email__icon--${iconClass}"></button>
//             <div class="email__info">
//               <div class="email__sender">${email.sender.name}</div>
//               <div class="email__subject">${email.subject}</div>
//             </div>
//             <div class="email__time">${email.time}</div>
//           </div>
//           <div class="email__body"></div>
//       `; 

//     return emailElement; 
// }