import { NextResponse } from "next/server";

export async function POST(req : Request) {
    const { username , password} = await req.json();
    const url = 'https://dev-keycloak.zaraaq.com/realms/inventoryManagement/protocol/openid-connect/token';
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*'
      };

    const body = new URLSearchParams({
        grant_type: 'password',
        client_id: 'admin-cli',
        client_secret: 'qOxP5hitSmYCgZ8HrWHBx5aT7zzvGDv1',
        username: username,
        password: password
      });
    
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers,
          body
        });
    
        if (response.ok) {
          const data = await response.json();
          return NextResponse.json({ message: "Login successful", user: username }, { status: 200 });
        } else {
          // Handle login failure
          return NextResponse.json({ message: "Username or password is mismatch", user: username }, { status: 400 });
        }
      } catch (error) {
        return NextResponse.json({ message: "Error occurs", user: username }, { status: 400 });
      }
}