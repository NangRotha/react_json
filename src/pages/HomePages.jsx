import React from 'react'

const HomePages = () => {
  return (
    <div className='container'>
        <h1>Wellcome to React + Json server</h1>
        <p>Hello</p>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th className='col'>#</th>
                    <th className='col'>Full Name</th>
                    <th className='col'>Age</th>
                    <th className='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>1</th>
                    <td>Jonh Doe</td>
                    <td>30</td>
                    <td><button className='btn btn-primary'>Edit</button></td>
                </tr>
                <tr>
                    <th scope='row'>2</th>
                    <td>Jonh kk</td>
                    <td>30</td>
                    <td><button className='btn btn-primary'>Edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default HomePages