import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Link } from "lucide-react";
import Image from "next/image";
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Home() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Pay Bills</h1>
            </div>
            <div
                className="flex flex-1 p-12  items-start justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
            >
                    <CardWithForm />

            </div>
        </main>
    );
}




function CardWithForm() {
    return (
        <Card className=" w-1/2">
            <CardHeader>
                <CardTitle>Pay Bills</CardTitle>
                <CardDescription>Pay your bill in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="bill_number">Bill Number</Label>
                            <Input id="bill_number" placeholder="Bill Number" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="amount">Amount</Label>
                            <Input id="amount" placeholder="$ 2000" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="w-full">Pay</Button>
            </CardFooter>
        </Card>
    )
}
