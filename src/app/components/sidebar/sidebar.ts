import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <div class="sidebar" [class.collapsed]="!isOpen">
      <div class="sidebar-header">
        <h2>
          @if (isOpen) {Menu}
        </h2>
        <button class="toggle-btn" (click)="toggleSidebar()">
          {{ isOpen ? '←' : 'Menu →' }}
        </button>
      </div>
      
      <nav class="sidebar-nav">
        <ul>
          @for (item of menuItems; track $index) {
            <li [class.hidden]="!isOpen" class="nav-item">
              <a href="#" class="nav-link" (click)="onItemClick($event, item)">
                <i [class]="item.icon"></i>
                @if (isOpen) {
                  <div class="nav-text"> {{ item.label }}</div>
                }
              </a>
            </li>
          }
        </ul>
      </nav>
    </div>
  `,
  styleUrl: './sidebar.css'
})
export class Sidebar {
  @Output() sidebarToggle = new EventEmitter<void>();

  isOpen = true;
  menuItems = [
    { label: ' Home', icon: 'fas fa-home', route: '/' },
    { label: ' Products', icon: 'fas fa-box-open', route: '/products' },
    { label: ' Orders', icon: 'fas fa-shopping-cart', route: '/orders' },
    { label: ' Settings', icon: 'fas fa-cogs', route: '/settings' },
    { label: ' Profile', icon: 'fas fa-user', route: '/profile' }
  ];

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.sidebarToggle.emit();
  }

  onItemClick(event: Event, item: any) {
    event.preventDefault();
    console.log('Navigation clicked:', item.label, item.route);
  }
}