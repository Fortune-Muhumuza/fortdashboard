import React from 'react'
import './ProjectsTable.scss'

function ProjectsTable() {
    return (
        <div className='table-container'>
            <div className="table-header">
                <span className='table-heading--main'>Projects</span>
                <p className='table-heading--sub'>30 done this month</p>
            </div>
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Members</th>
                    <th>Budget</th>
                    <th>Completion</th>
                </tr>
                <tr>
                    <td id='company'>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td id='budget'>$3000</td>
                    <td><div id='progress'></div></td>
                </tr>
                <tr>
                    <td id='company'>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td id='budget'>$4000</td>
                    <td><div id='progress2'></div></td>
                </tr>
                <tr>
                    <td id='company'>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td id='budget'>$3577</td>
                    <td><div id='progress3'></div></td>
                </tr>


            </table>
        </div>
    )
}

export default ProjectsTable