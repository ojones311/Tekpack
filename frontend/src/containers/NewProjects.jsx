import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NewProjects = (props) => {
    // const [defaultTemplates] = useState([
    //     { template_id: -1, img_name: 'T-shirt', image: 'https://pluspng.com/img-png/tshirt-png-outline-blank-t-shirt-outline-1663530-1421.jpg' },
    //     { template_id: -2, img_name: 'Hoodie', image: 'https://i.ya-webdesign.com/images/hoodie-template-png-13.png' },
    //     { template_id: -3, img_name: 'Jeans', image: 'https://i.pinimg.com/originals/7e/e7/81/7ee78144307504c7de8c4b50255a0ca8.png' },
    //     { template_id: -4, img_name: 'Socks', image: 'https://media.istockphoto.com/vectors/sock-template-vector-id512011001?k=6&m=512011001&s=612x612&w=0&h=tNkOx3mG7dRj5X1rKB46mYu77ehGHtH0rsNA1GieDmk=' }
    // ])
    const [templates, setTemplates] = useState({
        userTemplates: [],
        defaultTemplates: []
    })

    useEffect(() => {
        const getTemplates = async () => {
            try {
                // GET TEMPLATES BY USER ID
                // const { data: { payload }} = await axios.get(`/templates/${props.state.userId}`)
                const { data: { payload } } = await axios.get(`/templates/all`)
                console.log(payload)
                setTemplates({ ...templates, userTemplates: payload })
            } catch (err) {
                console.log(err)
            }
        }
        // const getDefaultTemplates = async () => {
        //     try {
        //         const { data: { payload } } = await axios.get(`/templates/default`)
        //         console.log(payload)
        //         setTemplates({ ...templates, defaultTemplates: payload })
        //     }
        // }
        getTemplates()
        // getDefaultTemplates()
    }, [])

    const templateCards = (arr, type) => {
        return arr.map(item => (
            <div className="card template-card" key={item.template_id} onClick={() => postNewProject(item.template_id, type)}>
                <div className="card-image">
                    <img src={item.image} alt={item.img_name} />
                </div>
                <div className="card-title">{item.img_name}</div>
            </div>
        ))
    }

const postNewProject = async () => {
    const { img_name, image} = this.state;
    try{
        const res = await axios.post("http://localhost:3100/api/projects/new", {img_name, image})
        console.log(res)
        console.log(res.projects_id)
        return res.projects_id
    }catch(error) {
        console.log(error)
    }
}


   const postNewProject = async (templateId, type) => {
        console.log(`Template ID: ${templateId}`)
        // POST A NEW PROJECT BASED ON THE PROJECT TEMPLATE_ID
        // const { data: {payload } } = await axios.post(`/${type}/${templateId}`)
        // console.log(payload)
        // RETURN THE NEW PROJECT_ID
        // ON SUCCESS call function pushToSpecForm which is setup below
        // pushToSpecForm(payload.projectId)
    }

    const pushToSpecForm = (projectId) => {
        props.history.push(`/projects/${projectId}`)
    }

    return (

        <div>
            <h3 className='center'>Saved Templates</h3>
            <div className='project-templates'>
                {templateCards(templates.userTemplates, 'custom')}
            </div>
            {/* <form onSubmit={postNewProject}>
            <input>img_name</input>
            <input> img</input>
            <button type="submit"></button>
            </form> */}

            <hr />
            <h3 className='center'>Default Templates</h3>
            <div className='project-templates project-templates-default'>
                {templateCards(templates.defaultTemplates, 'default')}
            </div>

        </div >
    )
}

export default NewProjects