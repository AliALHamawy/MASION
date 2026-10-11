import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Specifications = ({ product }: { product: any }) => {
    return (
        <div className="w-full py-10 ">
            <Table className="w-full border-b-0">
                <TableBody className="w-full">
                    <TableRow className="w-full hover:bg-transparent">
                        <TableCell className="font-medium w-1/2 text-muted-foreground">Brand</TableCell>
                        <TableCell className="w-1/2">{product.brand}</TableCell>
                    </TableRow>
                    <TableRow className="w-full hover:bg-transparent">
                        <TableCell className="font-medium w-1/2 text-muted-foreground">Category</TableCell>
                        <TableCell className="w-1/2">{product.category}</TableCell>
                    </TableRow>
                    <TableRow className="w-full hover:bg-transparent">
                        <TableCell className="font-medium w-1/2 text-muted-foreground">SKU</TableCell>
                        <TableCell className="w-1/2">{product.sku}</TableCell>
                    </TableRow>
                    <TableRow className="w-full hover:bg-transparent">
                        <TableCell className="font-medium w-1/2 text-muted-foreground">Availability</TableCell>
                        <TableCell className="w-1/2">{product.availabilityStatus}</TableCell>
                    </TableRow>
                    <TableRow className="w-full hover:bg-transparent">
                        <TableCell className="font-medium w-1/2 text-muted-foreground">Shipping</TableCell>
                        <TableCell className="w-1/2">{product.shippingInformation}</TableCell>
                    </TableRow>
                    <TableRow className="w-full hover:bg-transparent border-b-0">
                        <TableCell className="font-medium w-1/2 text-muted-foreground">Returns</TableCell>
                        <TableCell className="w-1/2">{product.returnPolicy}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Specifications