import { HttpService } from '@nestjs/axios';
export declare class AppController {
    private readonly httpService;
    private readonly serviceBaseUrl;
    constructor(httpService: HttpService);
    create(service: string, createDto: any): Promise<any>;
    findAll(service: string): Promise<any>;
    findOne(service: string, id: string): Promise<any>;
    update(service: string, id: string, updateDto: any): Promise<any>;
    remove(service: string, id: string): Promise<any>;
    private forwardRequest;
}
