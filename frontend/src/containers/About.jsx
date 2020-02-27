import React, { useState, useEffect } from 'react'

const About = () => {
    const [state, setState] = useState({
        speed: 10
    })

    return (
        <div>
            <h1>About Page</h1>
            <p>What if I told you to make 2,000 gallons of water to make the jeans you are wearing right now, you wouldn’t believe it. 
                Nobody ever really thinks what it took to make a piece of clothing we just like it and buy it. </p>

            <p>
                The big problem in the fashion world today is that textile dying is the second largest polluter of water globally and
                 majority of these textiles are ended up in landfills or burned. because of sample exchanges between designer and factory, 
                 design && specification inaccuracy, lost mail and emails, miscommunications between the two parties and its also hard to 
                 manage hard copy files for each product. Tekpack is your one stop shop to manage and keep track of product specifications
                 and its related content seamlessly. The whole process will cut down on waste in the supply chain and prevent costly mistakes in production. </p>
            <p>
                A simple user interface that helps designers troubleshoot before any fabric is cut. With Tekpack they can make real time updates and reduce 
                human error to create a better communication flow between designer and factory and also upload their own design. We do have a template option where 
                they can choose from one of our basic templates.
            </p>
            <p>
                For future features 
                <or>
                <li>Designers to be able to send factories their url link. The supplier will have to sign up under the supplier account to 
                access the designers projects.Supplier will not be allowed to edit images or measurements but they will be able to comment on designers projects.</li>
                <li> Designers image will be dynamic where once a measurement is inputed the image would display the input in real time.</li>
                <li>We also want to change our database to mongo db where we would be able to have a more (INSERT WHY)</li>
                </or>
            </p>

        <h3> Created By:</h3>
        TekPack is developed with ❤️ by Kadijah Wilson, Jenesh Napit, Owen Jones, and Jonathan Fagan.
        </div>
    )
}

export default About