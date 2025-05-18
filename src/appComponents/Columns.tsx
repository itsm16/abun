import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type ColumnDef } from "@tanstack/react-table"
import wordImg from '@/assets/w1.svg'

export type Articles = {
  id: string
  title: string,
  keyword: string,
  words: string,
  created: string,
  action: string,
  publish: string
}

export const columns: ColumnDef<Articles>[] = [
  {
    accessorKey: "title",
    header: "Article Title",
  },
  {
    accessorKey: "keyword",
    header: "Keyword [Traffic]",
  },
  {
    accessorKey: "words",
    header: "Words",
  },
  {
    accessorKey: "created",
    header: "Created On",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => <Button variant={"outline"} className=" text-green-300 border-green-300 hover:text-green-300 px-10">View</Button>,
  },
  {
    accessorKey: "publish",
    header: "Publish",
    cell: () => 
      <div className="">
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">
            <img src={wordImg} width={22} alt="wordpress" />
          </SelectItem>
        </SelectContent>
      </Select>
      </div>
    
  },
]