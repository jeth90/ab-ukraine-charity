import Image from 'next/image'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const Swal = require('sweetalert2')

export default function Register() {
    const router = useRouter()

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState("/img/avatars/avatar_3.png");
    const [accountId, setAccountId] = useState(null)
    const [inputType, setInputType] = useState('password')
    const [iconPass, setPassIcon] = useState('fas fa-eye-slash fa-fw')

    useEffect(()=>{
        const userAddress = localStorage.getItem('mprnts-userAddress')

        if (userAddress == null){
            router.push('/')
        }else{
            setAccountId(userAddress)
        }
       
    })

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
    
          setImage(i);
          setCreateObjectURL(URL.createObjectURL(i));
        }
      };

    const submitSignUp = async (event) => {
        event.preventDefault()
        const data = new FormData();
        data.append('image', image)
        data.append('accountid', event.target.accountid.value)
        data.append('name', event.target.name.value)
        data.append('email', event.target.email.value)
        data.append('password', event.target.password.value)
        
        fetch(`${process.env.BACKEND_URL}/api/users/add`, {
            method: 'post',          
            body: data,
            })
            .then(response => response.json())
            .then(async(data) => {
                if (data.message == 'success'){
                    Swal.fire('Success!','','success')                   
                    signIn(event.target.accountid.value)                   
                }else{
                    Swal.fire('Error!', data.message, 'error')
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    const signIn = async (accountid) => {        
        let data = {
            accountid: accountid
        }
        fetch(`${process.env.BACKEND_URL}/api/users/login`, {
            method: 'POST', 
            headers: {                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
            }) 
            .then(response => response.json())
            .then(async(data) => {
                if (data.message == 'success'){
                    router.push('/')    
                }else{
                    Swal.fire('Error!', data.message, 'error')
                }
            })            
    }

    const showPassword = () => {
        if (inputType == 'password'){
            setInputType('text')
            setPassIcon('fas fa-eye fa-fw')
        }else{
            setInputType('password')
            setPassIcon('fas fa-eye-slash fa-fw')
        }
    }

  return (
        <>            
			<div className="edit_profile register hero__5">
				<div className="container">
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-8 offset-lg-2">
							<div className="right_part space-y-20">
								<h1 className="color_white"> Register new account</h1>
								<p className="color_white">You can set preferred display name, create your profile URL and manage other personal settings.</p>
                                <form method='post' onSubmit={submitSignUp}>
                                    <input type="hidden" name='accountid' value={accountId}/>
								<div className="box edit_box w-full mx-auto">                                   
                                        <div className="row">
                                            <div className="col-lg-12 account-info">
                                                <div className="avatars space-x-20 mb-30">
                                                    <div id="profile-container">
                                                        <div>
                                                            <Image id="profileImage" src={createObjectURL} alt="Avatar" className="avatar avatar-lg border-0" layout='fill' objectFit='cover'/>
                                                        </div>													
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">Profile photo</h6>
                                                        <p className="mb-1">We recommend an image of at least 400x400. Gifs work too🙌</p>
                                                        <div id="boxUpload">
                                                            <a href="#" className="btn btn-sm btn-dark"> Upload </a>
                                                            <input id="imageUpload" type="file" name="image" placeholder="Photo" required="" capture="" onChange={uploadToClient} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="mb-20"> 🍉 Account info </h3>
                                                <div className="form-group space-y-10 mb-0">
                                                    <div className="space-y-20">
                                                        <div className="space-y-10">
                                                            <span className="nameInput">Display name</span>
                                                            <input type="text" className="form-control" placeholder="your name" name='name'/>
                                                        </div>												
                                                        <div className="space-y-10">   
                                                        <span className="nameInput">Email address</span>                                                        
                                                            <div className="confirm">
                                                                <input type="text" className="form-control" placeholder="Enter email" name='email' />                                                               
                                                            </div>
                                                        </div>
                                                        <div className="space-y-10">
														<span class="nameInput d-flex justify-content-between">Password</span>
														<div class="confirm">
															<input type={inputType} class="form-control" placeholder="Enter password" name='password'/>
															<a class="confirm-btn btn btn-dark py-1 px-3" onClick={() => showPassword()}>
                                                                <span className={iconPass}></span>
                                                            </a>
														</div>
													</div>
                                                        <div className="space-y-10">
                                                            <span className="nameInput">Bio</span>
                                                            <textarea rows={5} placeholder="Add your bio" name='bio'></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        </div>                                    
									<div className="hr mb-3"></div>
									
									<button className="btn btn-grad" type='submit'>Register</button>
                                  
								</div>
                                </form>
							</div>
						</div>
					</div>
				</div>
			</div>			
         </>
              
  )
}
