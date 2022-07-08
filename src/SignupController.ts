import { SignupService } from "./SignupService"

export interface SignupParams {
    username: string
    password: string
    email: string
}
export class SignupController {
    private memberService: SignupService = new SignupService()
    submit (param: SignupParams) {
        this.memberService.doSignup(param)
        this.redirectSuccess()
    }

    redirectSuccess () {
        return 'success'
    }
}