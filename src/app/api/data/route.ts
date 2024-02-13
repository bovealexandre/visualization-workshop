import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  const csvFilePath = path.resolve(__dirname, 'src/data/netflix_titles.csv');
  const csvFileContent = fs.readFileSync(csvFilePath, 'utf-8');
  console.log(csvFileContent)
  return NextResponse.json({message: "empty"})
}