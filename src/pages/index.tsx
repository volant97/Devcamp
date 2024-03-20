import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card>
        <CardHeader>
          <CardTitle>카드 타이틀</CardTitle>
          <CardDescription>카드 설명</CardDescription>
        </CardHeader>
        <CardContent>
          <div>폼</div>
        </CardContent>
        <CardFooter>
          <Button>버튼1</Button>
          <Button>버튼2</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
