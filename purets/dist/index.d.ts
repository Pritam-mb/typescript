declare const val: string[];
declare class user {
    name: string;
    private email;
    protected coursecontent: number;
    readonly city: string;
    constructor(name: string, email: string);
    get privataccess(): string;
    get course(): number;
    set course(e: number);
}
declare class subuser extends user {
    changecoursecount(): void;
}
declare const pritam: user;
//# sourceMappingURL=index.d.ts.map