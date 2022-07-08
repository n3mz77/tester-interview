export interface MemberModel {
    username: string
    password: string
    email: string
}
export class MemberRepository {
    insertToDb(member: MemberModel) {
        // insert to db
        return true
    }

}