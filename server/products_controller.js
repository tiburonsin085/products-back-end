module.exports = {

    create : (req, res) => {
        const db = req.app.get('db') ;
        const {name, description, price, image_url} = req.body

        db.create_product([name, description, price, image_url])
            .then( () => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: 'ops somthing went wrong'})
            })

    },
    // create: (req, res, next) => {
    //     const dbInstance = req.app.get('db');
    //     const { name, description, price, image_url } = req.body;
    
    //     dbInstance.create_product([name, description, price, image_url])
    //       .then(() => res.sendStatus(200))
    //       .catch(err => {
    //         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
    //         console.log(err)
    //       });
    //   },

    getOne : (req, res) => {
        const db = req.app.get('db') ;
        const {id} = req.params

        db.read_product(id)
            .then( (product) => res.sendstatus(200).send(product))
            .catch(err => {
                res.status(500).send({errorMessage: 'ops somthing went wrong'})
            })

    },
    getAll : (req, res) => {
        const db = req.app.get('db') ;

        db.read_products()
            .then( (products) => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({errorMessage: 'ops somthing went wrong'})
                console.log(err)
            })

    },
    update: (req, res ) => {
        const db = req.app.get('db') ;
        const {id} = req.params
        const {desc} = req.query

        db.update_product([id, desc])
            .then( () => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: 'ops somthing went wrong'})
                console.log(err)
            })


    },
    delete: (req, res ) => {
        const db = req.app.get('db') ;
        const {id} = req.params

        db.delete_product(id)
            .then( () => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: 'ops somthing went wrong'})
            })

    }
}