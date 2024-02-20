import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Product } from '../interfaces/products.interface';
import { ProductService } from '@/services/products.service';
import { CreateProductDto } from '@/dtos/products.dto';
export class ProductController {
  public productService = new ProductService();

  public getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log('getProducts>>>>>>>>>>>>>>', req);
    try {
      const allProducts: Product[] = await this.productService.findAllProduct();
      res.send({ data: allProducts, status: 'success' });
    } catch (error) {
      next(error);
    }
  };
  public addProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const reqObj: CreateProductDto = req.body;
      const addNewEntry: Product = await this.productService.createProduct(reqObj);
      res.send({ data: addNewEntry, status: 'success' });
    } catch (error) {
      next(error);
    }
  };
}
