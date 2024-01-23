import { Check, ChevronsUpDown, Archive, Search, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

type SearchLayoutProps = {};

const teams = [
  {
    value: "all",
    label: "회사 저장소",
  },
  {
    value: "myteam",
    label: "팀 저장소",
  },
  {
    value: "private",
    label: "개인 저장소",
  },
];

const filters = [
  {
    id: "website",
    value: "웰페이지",
  },
  {
    id: "record",
    value: "음성녹음",
  },
  {
    id: "pdf",
    value: "PDF",
  },
  {
    id: "excel",
    value: "엑셀",
  },
  {
    id: "youtube",
    value: "Youtube",
  },
];

export default function SearchLayout({}: SearchLayoutProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("private");

  return (
    <div className="flex-1 flex flex-col p-4">
      <div className="basis-12 justify-center">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? teams.find((framework) => framework.value === value)?.label
                : value}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="저장소 검색" />
              <CommandEmpty>발견 된 저장소가 없습니다.</CommandEmpty>
              <CommandGroup>
                {teams.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      console.log(currentValue);
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h4 className="text-5xl font-semibold custom-gradient-text py-4">
          KPMG BRIDGE
        </h4>
        <h5 className="text-xl text-[#0000004D] py-4">
          구성원들의 사내정보망에서 원하는 정보를 찾아보세요.
        </h5>
        <div className="basis-24 flex py-2">
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="w-[40rem] relative">
                <Search className="absolute left-2 top-1 h-8 w-4 text-muted-foreground" />
                <Input placeholder="검색어 입력" className="pl-8" />
                <Archive className="absolute right-12 top-1 h-8 w-4 text-muted-foreground cursor-pointer" />
                <Send className="absolute right-4 top-1 h-8 w-4 text-muted-foreground cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
        <div className="flex py-2">
          {filters.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 mx-2 last:mr-0"
            >
              <Checkbox id={item.id} />
              <Label htmlFor={item.id}>{item.value}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
