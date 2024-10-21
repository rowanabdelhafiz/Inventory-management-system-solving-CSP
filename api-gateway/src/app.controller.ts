import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
@Controller(':service')
export class AppController {
  private readonly serviceBaseUrl = {
    product: 'http://localhost:8000/product',
    supplier: 'http://localhost:8080/supplier',
    users:"http://localhost:8888/users"
  };

  constructor(private readonly httpService: HttpService) {}

  @Post()
  async create(@Param('service') service: string, @Body() createDto: any): Promise<any> {
    return this.forwardRequest(service, 'POST', '', createDto);
  }

  @Get()
  async findAll(@Param('service') service: string): Promise<any> {
    return this.forwardRequest(service, 'GET', '');
  }

  @Get(':id')
  async findOne(@Param('service') service: string, @Param('id') id: string): Promise<any> {
    return this.forwardRequest(service, 'GET', id);
  }

  @Put(':id')
  async update(@Param('service') service: string, @Param('id') id: string, @Body() updateDto: any): Promise<any> {
    return this.forwardRequest(service, 'PUT', id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('service') service: string, @Param('id') id: string): Promise<any> {
    return this.forwardRequest(service, 'DELETE', id);
  }

  private async forwardRequest(service: string, method: string, id: string, data?: any): Promise<any> {
    try {
      const result: AxiosResponse = await this.httpService.request({
        method,
        url: `${this.serviceBaseUrl[service]}/${id || ''}`,
        data,
      }).toPromise();

      return result.data;
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return {
        error: 'Internal Server Error',
        message: error.response?.data || error.message,
      };
    }
  }
}