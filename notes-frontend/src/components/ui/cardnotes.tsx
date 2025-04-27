"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./textarea";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, X, Edit, Save, Trash2 } from "lucide-react";

// Tipe data untuk struktur notes - sesuaikan dengan struktur API Anda
type Note = {
  id: string;
  username: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function CardNotes({ delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [username, setUsername] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [showAddNote, setShowAddNote] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  // UI state untuk menampilkan loading atau error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk menampilkan form tambah note baru
  const showAddNoteForm = () => {
    setShowAddNote(true);
  };

  // Fungsi untuk membatalkan penambahan note baru
  const cancelAddNote = () => {
    setShowAddNote(false);
    setNewNoteContent("");
  };

  // Fungsi untuk memulai edit note
  const startEditNote = (note: Note) => {
    setEditingNoteId(note.id);
    setEditContent(note.content);
  };

  // Fungsi untuk membatalkan edit note
  const cancelEditNote = () => {
    setEditingNoteId(null);
    setEditContent("");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
      className="w-full"
    >
      <Card className="w-full max-w-sm my-3 mx-auto dark:bg-cyan-700">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/bronya.jpeg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <CardTitle>User Notes</CardTitle>
              <CardDescription>
                Create and manage your personal notes
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Notes List */}
              {notes.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Your Notes</h3>
                  <div className="space-y-3">
                    {notes.map((note) => (
                      <Card
                        key={note.id}
                        className="bg-white dark:bg-gray-800 shadow-sm"
                      >
                        <CardContent className="p-3">
                          {editingNoteId === note.id ? (
                            <div className="space-y-2">
                              <Textarea
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                className="min-h-24 dark:bg-gray-700 dark:text-white"
                              />
                              <div className="flex gap-2 justify-end">
                                <Button
                                  size="sm"
                                  variant="neutral"
                                  onClick={cancelEditNote}
                                  className="dark:bg-gray-700"
                                >
                                  Cancel
                                </Button>
                                <Button size="sm" className="dark:bg-cyan-500">
                                  <Save size={16} className="mr-1" /> Save
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <p className="text-sm whitespace-pre-wrap dark:text-white">
                                {note.content}
                              </p>
                              <div className="flex justify-end gap-2 mt-2">
                                <Button
                                  size="sm"
                                  variant="neutral"
                                  onClick={() => startEditNote(note)}
                                  className="dark:bg-gray-700"
                                >
                                  <Edit size={16} className="mr-1" /> Edit
                                </Button>
                                <Button size="sm" variant="neutral">
                                  <Trash2 size={16} className="mr-1" /> Delete
                                </Button>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Add New Note Form */}
              {showAddNote && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2"
                >
                  <Card className="bg-white dark:bg-gray-800 border-2">
                    <CardHeader className="p-3 pb-0">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-l">Add New Note</CardTitle>
                        <Button
                          size="sm"
                          variant="neutral"
                          onClick={cancelAddNote}
                          className="h-8 w-8 p-0"
                        >
                          <X size={16} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <Input
                        id="title"
                        type="text"
                        placeholder="Title"
                        required
                        className="min-h-8 dark:bg-gray-700 dark:text-white border-2"
                      />
                      <Textarea
                        placeholder="Write your note here..."
                        value={newNoteContent}
                        onChange={(e) => setNewNoteContent(e.target.value)}
                        className="min-h-24 mt-2 dark:bg-gray-700 dark:text-white"
                      />
                      <Button className="w-full mt-3 dark:bg-cyan-500">
                        <Save size={16} className="mr-2" /> Save Note
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Error message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            className="w-full dark:bg-cyan-500"
            onClick={showAddNoteForm}
            disabled={showAddNote || !username.trim()}
          >
            <Plus size={16} className="mr-2" /> Add New Note
          </Button>
          <Button
            variant="neutral"
            className="w-full dark:bg-white dark:text-black"
          >
            Save User
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
