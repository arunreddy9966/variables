import React from 'react'

function MarksSheet(props) {
    let telmarks=Number(props.telmarks);
    let hindimarks=Number(props.hindimarks);
    let engmarks=Number(props.engmarks);
    let mathsmarks=Number(props.mathsmarks);
    let scimarks=Number(props.scimarks);
    let socmarks=Number(props.socmarks);

    
    let totalmarks=telmarks+hindimarks+engmarks+
    mathsmarks+scimarks+socmarks;

    let percentage=totalmarks/600*100
  return (
    <div>
        <table>
            <caption> Tenth Marks Sheet of {props.name}</caption>
        <thead>
            <tr>
          <th>Subject</th>  
          <th>Max Marks</th>
          <th>Marks Obtained</th>
          <th>Result</th>
          <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
        <tr>
          <td>Telugu</td>  
          <td>100</td>
          <td>{telmarks}</td>
          <td>{telmarks>35?"pass":"fail"}</td>
          <td>Good</td>
            </tr>
            <tr>
          <td>Hindi</td>  
          <td>100</td>
          <td>{hindimarks}</td>
          <td>{hindimarks>35?"pass":"fail"}</td>
          <td>Good</td>
            </tr>
            <tr>
          <td>English</td>  
          <td>100</td>
          <td>{engmarks}</td>
          <td>{engmarks>35?"pass":"fail"}</td>
          <td>Good</td>
            </tr>
            <tr>
          <td>Maths</td>  
          <td>100</td>
          <td>{mathsmarks}</td>
          <td>{mathsmarks>35?"pass":"fail"}</td>
          <td>Good</td>
            </tr>
            <tr>
          <td>Science</td>  
          <td>100</td>
          <td>{scimarks}</td>
          <td>{scimarks>35?"pass":"fail"}</td>
          <td>Good</td>
            </tr>
            <tr>
          <td>Social</td>  
          <td>100</td>
          <td>{socmarks}</td>
          <td>{socmarks>35?"pass":"fail"}</td>
          <td>Good</td>
            </tr>
        </tbody>
        <tfoot>
        <tr>
          <th>Total</th>  
          <th>600</th>
          <th>{totalmarks}({percentage}%)</th>
          <th>Pass</th>
          <th>Good</th>
            </tr>
        </tfoot>
        </table>
    </div>
  )
}

export default MarksSheet