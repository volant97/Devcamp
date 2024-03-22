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
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>로그인</CardTitle>
          <CardDescription>로그인 정보를 입력해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="relative space-y-3 overflow-x-hidden">
            <div className={cn("space-y-3")}>
              <div className="flex flex-col gap-3">
                <label>이메일</label>
                <Input placeholder="hello@naver.com" />
              </div>
              <div className="flex flex-col gap-3">
                <label>비밀번호</label>
                <Input placeholder="@abc123456" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="w-32">로그인</Button>
          {/* <Button>버튼2</Button> */}
        </CardFooter>
      </Card>
    </main>
  );
}
