import { ColorPipe } from "../pipe/color.pipe";

export interface TabelaModelo {
    colunas: Colunas[];
}

export interface Colunas {
    titulo: string;
    propriedade: string;
    tipo?: string;
    sort?: ColumnSort;
    mascara?: Mascara;
    color?: Mascara;
}

interface ColumnSort {
    nameSort?: string;
    order: 'asc' | 'desc' | false;
}

export interface Mascara {
    tokenPipe: any;
    args?: string[] | string;
}
