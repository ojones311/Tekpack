import React, { useState, useEffect } from 'react'

const NewProjects = (props) => {
    const [templates, setTemplates] = useState([
        { name: 'T-shirt', img: 'https://pluspng.com/img-png/tshirt-png-outline-blank-t-shirt-outline-1663530-1421.jpg' },
        { name: 'Jeans', img: 'https://i.pinimg.com/originals/7e/e7/81/7ee78144307504c7de8c4b50255a0ca8.png' },
        { name: 'Hoodie', img: 'https://i.ya-webdesign.com/images/hoodie-template-png-13.png' },
        { name: 'Hoodie', img: 'https://cdn5.vectorstock.com/i/thumb-large/38/49/set-of-blank-socks-vector-1433849.jpg' },
    ])

    const templateCards = () => {
        return templates.map((item, i) => (
            <div className='col s6 center'>
                {/* {item.name} */}
                <div className="card">
                    <div className="card-image">
                        <img src={item.img} />
                        <span className="card-title black-text">{item.name}</span>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <h1 className='center'>Project Templates</h1>
            <div className="row valign-wrapper">
                {templateCards()}
                {/* <div class="col s6">1</div>
                <div class="col s6">2</div>
                <div class="col s6">3</div>
                <div class="col s6">4</div> */}
            </div>
        </div>
    )
}

export default NewProjects