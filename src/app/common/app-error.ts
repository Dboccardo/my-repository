
export class AppError { 
    constructor(public error?: any) {}
}

export class NotFoundError extends AppError {}