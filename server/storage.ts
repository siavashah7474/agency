import { type User, type InsertUser, type InsertBooking, type Booking, type InsertContact, type Contact } from "@shared/schema";
import { randomUUID } from "crypto";
import { supabase } from "./supabase";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  insertBooking(booking: InsertBooking): Promise<Booking>;
  insertContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async insertBooking(booking: InsertBooking): Promise<Booking> {
    throw new Error("MemStorage does not support bookings");
  }

  async insertContact(contact: InsertContact): Promise<Contact> {
    throw new Error("MemStorage does not support contacts");
  }
}

export class SupabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const { data } = await supabase.from("users").select("*").eq("id", id).single();
    return data ?? undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const { data } = await supabase.from("users").select("*").eq("username", username).single();
    return data ?? undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const { data, error } = await supabase.from("users").insert(insertUser).select().single();
    if (error) throw error;
    return data;
  }

  async insertBooking(booking: InsertBooking): Promise<Booking> {
    const { data, error } = await supabase.from("bookings").insert(booking).select().single();
    if (error) throw error;
    return data;
  }

  async insertContact(contact: InsertContact): Promise<Contact> {
    const { data, error } = await supabase.from("contacts").insert(contact).select().single();
    if (error) throw error;
    return data;
  }
}

export const storage = new SupabaseStorage();
