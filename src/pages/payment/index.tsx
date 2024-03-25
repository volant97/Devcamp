import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function Home() {
  return (
    <div className="flex justify-center py-16 bg-zinc-100">
      <main className="flex justify-between gap-5 w-[800px] text-sm">
        <div className="flex flex-col gap-3 w-[60%]">
          {/* 주문 상품 정보 */}
          <div className="flex flex-col gap-3 border-2 p-3 bg-white">
            <h1 className="font-bold text-base">주문 상품 정보</h1>
            <div className="flex gap-3">
              <div className="w-[100px] h-[100px] border-2 border-black">
                이미지
              </div>
              <div>
                <h2 className="font-bold">Daliy Facial Soap</h2>
                <p>용량 80ml 1개</p>
                <div className="flex gap-1 font-bold">
                  <h2>18,000</h2>
                  <span>원</span>
                </div>
              </div>
            </div>
          </div>
          {/* 주문자 정보 */}
          <div className="flex flex-col gap-3 border-2 p-3 bg-white">
            <h1 className="font-bold text-base">주문자 정보</h1>
            <div className="flex justify-between items-start gap-3 ">
              <div>
                <h2 className="font-bold">홍길동</h2>
                <p>01012345678</p>
                <p>user@naver.com</p>
              </div>
              <Button variant="outline" size={"sm"}>
                수정
              </Button>
            </div>
          </div>
          {/* 배송 정보 */}
          <div className="flex flex-col gap-3 border-2 p-3 bg-white">
            <h1 className="font-bold text-base">배송 정보</h1>
            <div className="flex justify-between items-start gap-3 ">
              <div>
                <h2 className="font-bold">홍길동</h2>
                <p>01012345678</p>
                <div className="font-bold">
                  <p>서울특별시 서대문구 성산로7길 89-8 (연희동)</p>
                  <p>주식회사 아임웹</p>
                  <p>(03706)</p>
                </div>
              </div>
              <Button variant="outline" size={"sm"}>
                변경
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">배송 메모</h2>
              <Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="배송메모를 선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="memo1">배송메모1</SelectItem>
                      <SelectItem value="memo2">배송메모2</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Select>
            </div>
          </div>
          {/* 쿠폰/포인트 */}
          <div className="flex flex-col gap-3 border-2 p-3 bg-white">
            <h1 className="font-bold text-base">쿠폰/포인트</h1>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">쿠폰 번호</h2>
              <div className="flex gap-3">
                <Input type="string" placeholder="쿠폰 번호 입력" />
                <Button className="bg-blue-500" type="submit">
                  번호확인
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">쿠폰</h2>
              <div className="flex gap-3 ">
                <Input
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 cursor-not-allowed"
                  type="string"
                  placeholder="쿠폰 금액 확인"
                  readOnly
                />
                <Button className="bg-blue-500" type="submit">
                  쿠폰적용
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">포인트</h2>
              <div className="flex gap-3">
                <Input type="string" placeholder="포인트 금액 입력" />
                <Button className="bg-blue-500" type="submit">
                  전액사용
                </Button>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <h2 className="font-bold">보유 포인트</h2>
                  <span>2,300</span>
                </div>
                <p className="text-xs text-gray-400">
                  5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3  w-[40%]">
          {/* 최종 결제금액 */}
          <div className="flex flex-col gap-3 border-2 p-3 bg-white">
            <h1 className="font-bold text-base">최종 결제금액</h1>
            <div className="flex justify-between items-start gap-3">
              <div className="flex flex-col gap-1 text-gray-400">
                <p>상품가격</p>
                <p>쿠폰 할인</p>
                <p>포인트 사용</p>
                <p>배송비</p>
              </div>
              <div className="flex flex-col items-end gap-1 font-bold">
                <div className="flex gap-1 font-bold">
                  <h2>18,000</h2>
                  <span>원</span>
                </div>
                <div className="flex gap-1 font-bold">
                  <span>-</span>
                  <h2>1,000</h2>
                  <span>원</span>
                </div>
                <div className="flex gap-1 font-bold">
                  <span>-</span>
                  <h2>0</h2>
                  <span>원</span>
                </div>
                <div className="flex gap-1 font-bold">
                  <span>+</span>
                  <h2>2,500</h2>
                  <span>원</span>
                </div>
              </div>
            </div>
            <span className="w-full h-[1px] my-3 bg-slate-400 opacity-30"></span>
            <div className="flex justify-between font-bold">
              <h2>총 결제금액</h2>
              <div className="flex gap-1 text-[#6574ff]">
                <h2>19,500</h2>
                <span>원</span>
              </div>
            </div>
            <div className="flex justify-between mt-4 font-bold text-xs">
              <div className="flex gap-1 ">
                <h2 className="text-[#6574ff]">700</h2>
                <span>포인트 적립예정</span>
              </div>
            </div>
          </div>
          {/* 결제 방법 */}
          <div className="flex flex-col gap-3 border-2 p-3 bg-white">
            <h1 className="font-bold text-base">결제 방법</h1>
            <RadioGroup className="flex justify-between" defaultValue="r1">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="r1" id="r1" />
                  <Label htmlFor="r1">신용카드</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="r2" id="r2" />
                  <Label htmlFor="r2">무통장 입금</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="r3" id="r3" />
                  <Label htmlFor="r3">카카오페이</Label>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="r4" id="rr4" />
                  <Label htmlFor="r4">가상계좌</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="r5" id="r5" />
                  <Label htmlFor="r5">핸드폰 결제</Label>
                </div>
              </div>
            </RadioGroup>
            <div className="flex flex-col gap-2">
              <Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="00은행 : 0000-00-0000 예금주명" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="memo1">은행1</SelectItem>
                      <SelectItem value="memo2">은행2</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Select>
              <Input type="string" placeholder="입금자명 (미입력시 주문자명)" />
              <p className="text-gray-400 text-xs">
                주문 후 n시간 동안 미입금시 자동 취소됩니다.
              </p>
            </div>
            <span className="w-full h-[1px] my-3 bg-slate-400 opacity-30"></span>
            <div className="flex items-center space-x-2">
              <Checkbox id="cash-receipt" />
              <label
                htmlFor="cash-receipt"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                현금영수증 신청
              </label>
            </div>
          </div>
          {/* 결제 동의 */}
          <div className="flex flex-col gap-3 border-2 p-3 bg-white">
            <div className="flex items-center space-x-2">
              <Checkbox id="all" />
              <label
                htmlFor="all"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                전체 동의
              </label>
            </div>
            <div className="relative">
              <span className="absolute left-1 top-[2px] w-[10px] h-[10px] border-l-2 border-b-2"></span>
              <div className="flex ml-6 items-center space-x-2">
                <Checkbox id="agreement1" />
                <label
                  htmlFor="agreement1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  구매조건 확인 및 결제진행에 동의
                </label>
              </div>
            </div>
          </div>
          <Button className="bg-blue-500">결제하기</Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
