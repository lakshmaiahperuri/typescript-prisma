import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { CreateProductDto } from '../dtos/products.dto';
import { HttpException } from '@/exceptions/httpException';
import { Product } from '../interfaces/products.interface';
@Service()
export class ProductService {
  public product = new PrismaClient().Product;

  public async findAllProduct(): Promise<Product[]> {
    const allProduct: Product[] = await this.product.findMany();
    return allProduct;
  }

  public async findProductById(ProductId: number): Promise<Product> {
    const findProduct: Product = await this.product.findUnique({ where: { id: ProductId } });
    if (!findProduct) throw new HttpException(409, "Product doesn't exist");

    return findProduct;
  }

  public async createProduct(ProductData: CreateProductDto): Promise<Product> {
    // const findProduct: Product = await this.product.findUnique({ where: { id: ProductData.id } });
    console.log('product data>>>>>>>>>>>>>>>', ProductData);
    const createProductData: Product = await this.product.create({ data: { ...ProductData } });
    return createProductData;
  }
}
