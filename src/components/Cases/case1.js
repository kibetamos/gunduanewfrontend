import React from 'react'

const Case1 = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item._id} alt='' />
        </div>
        <div className='card-back'>
          <h1> <blockquote className="blockquote-reverse">
                { item.meta_info['Parties'].length < 70 ? `${item.meta_info['Parties']}` : 
                `${item.meta_info['Parties'].substring(0,70)}...`}</blockquote>
                </h1>
          <ul>
          <li>
              
            </li>
            <li>
              {/* <p className='ellipsis'>
            <strong>Judgement:</strong>{ item.judgement }
            </p> */}
            {/* <blockquote className="blockquote-reverse">
                { item.judgement.length < 70 ? `${item.judgement}` : 
                `${[item.judgement].substring(0,70)}...`}</blockquote> */}
                {/* //</li>`${item.judgement}`}.substring(0,70) */}
                {/* </blockquote> */}
            </li>
            <li>
              <strong>Date Delivered:</strong> {item.meta_info['Date Delivered']}
            </li>
            <li>
              <strong>Related case:</strong> {item.related_cases}
            </li>
            
            <li>
              <strong>Outcome:</strong> {item.meta_info['Case Outcome']}
            </li>
            {/* <li>
              <strong>Case Class:</strong> {item.meta_info['Case Class']}
            </li> */}
            
            <li>
              <strong>Tag:</strong> {item.resolved_acts}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Case1