import React from 'react'
import './TaskCard.css'

const TaskCard = (props) => {
  return (
    <div>TaskCard
        <table className="table">
            <caption className="caption">A summary of the UK's most famous punk bands</caption>
            <thead>
                <tr className="tr">
                    <th className="th">{props.task.name}</th>
                    <th className="th">{props.task.description}</th>
                    <th className="th">{props.task.duration}</th>
                    <th className="th">{props.task.status}</th>
                </tr>
            </thead>


        </table>
    </div>
  )
}

export default TaskCard