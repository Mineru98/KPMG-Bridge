import { useCallback } from "react";
import useSettingStore from "@/stores/setting/store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `채팅내용 예시 ${a.length - i}`
);

type SideBarLayoutProps = {};

export default function SideBarLayout({}: SideBarLayoutProps) {
  const { isOpen } = useSettingStore();

  const modifyHandler = useCallback((chatId: string) => {}, []);

  const deleteHandler = useCallback((chatId: string) => {}, []);

  return (
    <ScrollArea
      className={`${
        isOpen ? "flex basis-64" : "w-0 hidden overflow-hidden"
      } transition-all bg-[#EFF4FE]`}
      style={{ height: "calc(100dvh - 72px)" }}
    >
      <div className="px-4">
        <h4 className="sticky top-0 py-4 h-12 text-sm font-medium leading-none bg-[#EFF4FE]">
          목록
        </h4>
        {tags.map((tag, i) => (
          <>
            <div
              key={i}
              className="flex flex-row cursor-pointer rounded-md hover:bg-[#F7F9FF] p-2 transition-colors"
            >
              <div className="flex-1 h-14 flex flex-col justify-between">
                <div className="text-sm text-neutral-400">My Team</div>
                <div className="text-base text-neutral-800">{tag}</div>
              </div>
              <div className="basis-8 flex flex-row justify-between items-end">
                <div
                  className="text-sm text-neutral-400"
                  onClick={() => {
                    modifyHandler(i.toString());
                  }}
                >
                  M
                </div>
                <div
                  className="text-sm text-neutral-400"
                  onClick={() => {
                    deleteHandler(i.toString());
                  }}
                >
                  D
                </div>
              </div>
            </div>
            <Separator className="my-1" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
