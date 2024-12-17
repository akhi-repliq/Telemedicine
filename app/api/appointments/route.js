import { NextResponse } from "next/server";

let appointments = []; 

export async function GET() {
  return NextResponse.json(appointments);
}

export async function POST(request) {
  const newAppointment = await request.json();
  appointments.push(newAppointment);
  return NextResponse.json({ message: "Appointment booked successfully!" });
}
