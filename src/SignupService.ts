import { MemberRepository, MemberModel } from "./MemberRepository"
import { SignupParams } from "./SignupController"

export class SignupService {
    private memberRepo: MemberRepository = new MemberRepository()

    doSignup (params: SignupParams) {
        const response = this.memberRepo.insertToDb(params)
        if (!response) {
            throw new Error('signup failed')
        }
    }
}