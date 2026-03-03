import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { read } from 'fs';
import { MakeupService } from './makeup.service';

@Controller('makeup')
export class MakeupController {
  constructor(private readonly makeupService: MakeupService) {}

  @Get()
  getAllProducts() {
    return this.makeupService.getAllProducts();
  }

  @Get(':id')
  getproductsById(@Param('id') id: string) {
    return this.makeupService.getProductsById(Number(id));
  }

  @Post()
  addProducts(
    @Body()
    body: {
      id: number;
      name: string;
      brand: string;
      type: string;
      price: number;
      shade: string;
    },
  ) {
    return this.makeupService.addProducts(body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.makeupService.deleteProduct(Number(id));
  }
}
