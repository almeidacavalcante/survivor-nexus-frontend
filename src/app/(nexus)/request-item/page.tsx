import RequestItemForm from "@/components/request-item-form";
import api from "@/data/api";
import React from "react";

interface RequestItemProps {
  searchParams: {
    survivorId: string;
  }
}

interface ResponseOutput {
  id: string;
  name: string;
  birthDate: Date;
  gender: string,
  lastLocation: {
    latitude: number,
    longitude: number,
  },
  isInfected: boolean,
  infectedAt: Date | undefined,
  email: string,
  inventory: {
    items: {
      item: {
        id: string,
        name: string,
        description: string,
        removesInfection: boolean | undefined,
      },
      quantity: number;
    }[];
  }
}

async function getSurvivorById(survivorId: string): Promise<ResponseOutput> {
  const response = await api(`/survivors/findById/${survivorId}`)
  return await response.json()
}


export default async function RequestItemPage({searchParams}: RequestItemProps) {
  const output = await getSurvivorById(searchParams.survivorId)
  console.log('****')
  console.log(searchParams, output)
  return (
    <div>
      <RequestItemForm survivorName={output.name} survivor={output} />
    </div>
  )
}
