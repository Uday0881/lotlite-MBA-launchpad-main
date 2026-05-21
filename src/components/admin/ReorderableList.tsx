import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Trash2, Plus } from 'lucide-react';

interface ReorderableListProps<T> {
  items: T[];
  onItemsChange: (newItems: T[]) => void;
  renderItem: (item: T, index: number, updateItem: (updatedItem: T) => void) => React.ReactNode;
  defaultNewItem: () => T;
  addButtonText?: string;
}

export function ReorderableList<T extends { id: string }>({
  items,
  onItemsChange,
  renderItem,
  defaultNewItem,
  addButtonText = "Add Item"
}: ReorderableListProps<T>) {
  
  const moveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...items];
    const temp = newItems[index - 1];
    newItems[index - 1] = newItems[index];
    newItems[index] = temp;
    onItemsChange(newItems);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    const temp = newItems[index + 1];
    newItems[index + 1] = newItems[index];
    newItems[index] = temp;
    onItemsChange(newItems);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onItemsChange(newItems);
  };

  const updateItem = (index: number, updatedItem: T) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    onItemsChange(newItems);
  };

  const addItem = () => {
    onItemsChange([...items, defaultNewItem()]);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={item.id} className="relative pt-4 shadow-sm border border-border">
          <CardContent className="flex gap-4 items-start">
            <div className="flex flex-col gap-1 mt-1">
              <Button size="icon" variant="ghost" onClick={() => moveUp(index)} disabled={index === 0}>
                <ArrowUp className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => moveDown(index)} disabled={index === items.length - 1}>
                <ArrowDown className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 space-y-4">
              {renderItem(item, index, (updated) => updateItem(index, updated))}
            </div>

            <Button size="icon" variant="destructive" onClick={() => removeItem(index)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
      <Button onClick={addItem} variant="outline" className="w-full mt-4 border-dashed">
        <Plus className="w-4 h-4 mr-2" /> {addButtonText}
      </Button>
    </div>
  );
}
