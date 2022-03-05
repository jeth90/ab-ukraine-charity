import { useState } from 'react'

const SignupForm = ({ accountid, onClose, submitSignUpForm }) => {
    const [inputType, setInputType] = useState('password')
    const submitSignUp = async (event) => {
        event.preventDefault()
        submitSignUpForm(event)
    }

    const showPassword = (isCheck) => {
        if (isCheck){
            setInputType('text')
        }else{
            setInputType('password')
        }
    }


    return (
        <form method="post" id="frmSignup" onSubmit={submitSignUp}>
            <input type="hidden" name="accountid" value={accountid}/>
            <div className="field-item">
                <div className="field-wrap">
                    <input type="text" className="form-control mb-2" placeholder="Username" name="name"/>
                </div>
            </div>
            <div className="field-item">
                <div className="field-wrap">
                    <input type="text" className="form-control mb-2" placeholder="Your Email" name="email"/>
                </div>
            </div>
            <div className="field-item">
                <div className="field-wrap">
                    <input type={inputType} className="form-control" placeholder="Password" name="password"/>
                    <div className="field-item pb-0">
                        <input className="input-checkbox" id="showpass" type="checkbox" onChange={(e) => showPassword(e.target.checked)}/>
                        <label>Show password</label>
                    </div>
                </div>
            </div>
            <button className="Game_btn__3sv8y" style={{width: '100%'}}>Sign Up</button>
        </form>        
    )
}

export default SignupForm
