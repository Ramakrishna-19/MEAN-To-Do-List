import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  todos: any[] = [];
  text = '';

  constructor(private http: HttpClient) {
    this.loadTodos();
  }

  loadTodos() {
    this.http.get<any[]>('http://localhost:5000/todos')
      .subscribe(data => this.todos = data);
  }

  addTodo() {
    if (!this.text.trim()) return;

    this.http.post('http://localhost:5000/todos', { text: this.text })
      .subscribe(() => {
        this.text = '';
        this.loadTodos();
      });
  }

  deleteTodo(id: string) {
    console.log("Deleting ID:", id);

    this.http.delete(`http://localhost:5000/todos/${id}`)
      .subscribe({
        next: () => this.loadTodos(),
        error: err => console.error(err)
      });
  }

}
