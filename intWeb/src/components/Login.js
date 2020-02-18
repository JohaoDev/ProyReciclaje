import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
 <div class="container">
        <div class="row ">
            <div class="col-lg-2  ">                
            </div>
            <div class="col-lg-8">
            <div class="card card-signin my-5">
                    <div class="card-body">
                    <h5 class="card-title text-center">Iniciar Sesion</h5>
                        <form class="form-signin">
                            
                            <div class="form-group">
                                <input type="email"  class="form-control" placeholder="Usuario" />
                                
                            </div>
                        
                        
                            
                            <div class="form-group">
                                <input type="password"  class="form-control" placeholder="Password" />
                                
                            </div>

                            
                            <button   class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"   >Ingresar</button>
                            <hr class="my-4"/>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
            </div>
        </div>
   
 </div>

        )
    }
}
