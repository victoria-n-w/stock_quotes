import { Injectable } from '@nestjs/common';
import { stockRecord } from './stockRecord.model';

@Injectable()
export class StockService {
    addRecord(ticker: string, timestamp: number, price: number) {

    }

    getStockHistory(): stockRecord[] {
        return []
    }

    getAllInstruments(): string[] {
        return [];
    }
}
