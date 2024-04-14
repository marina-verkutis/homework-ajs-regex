export class Validator {
    validateUsername(username: string): boolean {
        const regex = /^(?!.*(?:[-_]{2,}|[0-9]{4,}|^[-_0-9]|[-_0-9]$))[a-zA-Z0-9_-]+$/;
        return regex.test(username);
    }
}
