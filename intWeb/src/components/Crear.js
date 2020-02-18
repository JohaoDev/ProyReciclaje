import React, { Component } from 'react';
import axios from 'axios';

const API = "http://localhost:7777/api/integrador"

export default class Crear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            latitud: '',
            longitud: '',
        }
    }

    changeHandler = e => {
        this.setState( {[e.target.name]: e.target.value} )
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            tabla: "recicladoras",
            datos: {
                nombre: this.state.nombre,
                longitud: this.state.longitud,
                latitud: this.state.latitud,
                recicladoras: [],
            }
        }

        console.log(JSON.stringify(this.post.datos))

        if (this.post.datos.nombre === "" ||
            this.post.datos.longitud === "" ||
            this.post.datos.latitud === ""
            ) {
          alert("Complete todos los datos para continuar...");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                alert("Agregado exitosamente")
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };

    // axios.get(API)
    // .then( res = () => {
    //     this.setState({ recicladoras: res})
    // })

    render() {
        const { nombre, latitud, longitud } = this.state
        return (
            <div class="container">
                <div class="row ">
                    <div class="col-lg-2  ">                
                    </div>
                    <div class="col-lg-8">
                    <div class="card card-signin my-5">
                            <div class="card-body">
                            <h5 class="card-title text-center">Crear Recicladora</h5>
                                <form class="form-signin" onSubmit={ this.saveData }>
                                        <div class="form-group row">
                                            <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Recicladora</label>
                                            <div class="col-sm-10">
                                            <input class="form-control form-control-lg"  placeholder="Nombre de la Recicladora"
                                                name="nombre"
                                                value={ nombre }
                                                onChange={ this.changeHandler }
                                            />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Contactos => LATITUD</label>
                                            <div class="col-sm-10">
                                            <input  class="form-control form-control-lg" placeholder="Numeros de contacto"
                                                name="latitud"
                                                value={ latitud }
                                                onChange={ this.changeHandler }
                                            />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Direccion => LONGITUD</label>
                                            <div class="col-sm-10">
                                            <input  class="form-control form-control-lg" placeholder="Nombre de la Recicladora"
                                                name="longitud"
                                                value={ longitud }
                                                onChange={ this.changeHandler }
                                            />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Descripcion</label>
                                            <div class="col-sm-10">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </div>            
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Crear</button>
                                    <hr class="my-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}
