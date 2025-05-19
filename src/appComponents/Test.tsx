import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "./DataTable"
import { columns, type Articles } from "./Columns"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Select, SelectContent, SelectTrigger, SelectItem } from "@/components/ui/select"

const Test = () => {
  const data: Articles[] = [
    {
      id: "1",
      title: "How to improve skills in League of legends",
      keyword: "league of legends [2240000]",
      words: "4575",
      created: "20 hours ago",
      action: "View",
      publish: "Wix"
    },
    {
      id: "2",
      title: "How to master last hitting in League of legends",
      keyword: "league of legends [2240000]",
      words: "4575",
      created: "20 hours ago",
      action: "View",
      publish: "Wix"
    },
    {
      id: "3",
      title: "7 Tips for better in League of legends",
      keyword: "league of legends [2240000]",
      words: "4575",
      created: "20 hours ago",
      action: "View",
      publish: "Wix"
    },
    {
      id: "4",
      title: "Top virtual executive assistant services (2024)",
      keyword: "league of legends [2240000]",
      words: "4575",
      created: "20 hours ago",
      action: "View",
      publish: "Wix"
    },
    {
      id: "5",
      title: "Unlimited Graphics Design Solution",
      keyword: "league of legends [2240000]",
      words: "4575",
      created: "20 hours ago",
      action: "View",
      publish: "Wix"
    },
    {
      id: "6",
      title: "Top Amazon Payment Methods for quick access to funds",
      keyword: "league of legends [2240000]",
      words: "4575",
      created: "...",
      action: "View",
      publish: "Wix"
    },
    {
      id: "7",
      title: "Backlink 101: What are backlinks and why they're important [Free Template]",
      keyword: "backlinks [8100]",
      words: "4575",
      created: "...",
      action: "View",
      publish: "Wix"
    },
    {
      id: "8",
      title: "7 Leading AI SEO tools in 2024 [Ranked & Compared]",
      keyword: "ai seo software [8100]",
      words: "1543",
      created: "...",
      action: "View",
      publish: "Wix"
    },
  ]

  return (
    <div className="w-full h-full">
      <div className="flex justify-center w-full h-[99%] relative">
        <SidebarTrigger className="absolute left-0" />
        <div className="mt-3 w-full h-full gap-10 flex flex-col items-center">
          <div className="flex flex-col gap-[10px] items-center">
            <div className="font-extrabold text-2xl">Articles</div>
            <div className=" absolute right-0 top-0 lg:hidden">
              <Select>
                <SelectTrigger>
                  <SelectContent>
                    <SelectItem value="generated">
                      Generated Articels
                    </SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <Tabs defaultValue="generated" className="h-12 md:w-fit w-full lg:flex hidden justify-center">
              <TabsList className="h-full py-[4px] px-1 md:w-fit w-full bg-white text-black ">
                {/* <TabsTrigger className="px-5" value="account">Account</TabsTrigger>
              <TabsTrigger className="px-5" value="password">Password</TabsTrigger> */}
                <div className="flex items-center border md:w-fit h-[32px] rounded-md ">
                  <div className="md:w-[200px] z-[25] border border-y-0 border-l-0 rounded-sm h-full">
                    <div className="w-full z-[25] rounded-md">
                      <TabsTrigger value="generated" className="w-full pl-[20px] border-l-0 rounded-sm h-[90%] border text-sm text-center">Generated Articles</TabsTrigger>
                    </div>
                  </div>
                  <div className="md:w-[200px] z-[25] border border-y-0 border-l-0 rounded-sm rounded-l-none h-full">
                    <div className="w-full z-[25] rounded-md rounded-l-none border-l-0">
                      <TabsTrigger value="published" className="w-full pl-[20px] h-[90%] border text-sm text-center">Published Articles</TabsTrigger>
                    </div>
                  </div>
                  <div className="md:w-[200px] z-[25] border border-y-0 border-l-0 rounded-sm h-full">
                    <div className="w-full z-[25] rounded-md rounded-l-none border-l-0">
                      <TabsTrigger value="scheduled" className="w-full pl-[20px] rounded-sm h-[90%] border text-sm text-center">Scheduled Articles</TabsTrigger>
                    </div>
                  </div>
                  <div className="md:w-[200px] z-[25] border border-y-0 border-l-0 rounded-sm h-full">
                    <div className="w-full z-[25] rounded-md rounded-l-none border-l-0">
                      <TabsTrigger value="archived" className="w-full pl-[20px] rounded-sm h-[90%] text-sm text-center">Archived Articles</TabsTrigger>
                    </div>
                  </div>
                </div>
              </TabsList>
            </Tabs>
          </div>
          <div className="">
            <Input
              className="h-8 w-[280px]"
              placeholder="Search for Title & Keywords...  " />
          </div>
          {/* Table */}
          <div className="w-full h-full">
            <DataTable<Articles, any> columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test