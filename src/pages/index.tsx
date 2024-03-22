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
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { SelectItem, SelectValue } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>계정 생성</CardTitle>
          <CardDescription>필수 정보를 입력해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="relative space-y-3 overflow-x-hidden">
            <div className={cn("space-y-3")}>
              <div className="flex flex-col gap-3">
                <label>이름</label>
                <Input placeholder="홍길동" />
              </div>
              <div className="flex flex-col gap-3">
                <label>이메일</label>
                <Input placeholder="hello@naver.com" />
              </div>
              <div className="flex flex-col gap-3">
                <label>비밀번호</label>
                <Input placeholder="@abc123456" />
              </div>
              <div className="flex flex-col gap-3">
                <label>비밀번호 확인</label>
                <Input placeholder="@abc123456" />
              </div>
              <div className="flex flex-col gap-3">
                <label>연락처</label>
                <Input placeholder="01012345678" />
              </div>
              <div className="flex flex-col gap-3">
                <label>역할</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="역할을 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">관리자</SelectItem>
                    <SelectItem value="user">일반사용자</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="w-32">계정 등록</Button>
          {/* <Button>버튼2</Button> */}
        </CardFooter>
      </Card>
    </main>
  );
}
