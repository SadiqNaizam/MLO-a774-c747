import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookMarked, ExternalLink } from 'lucide-react';

interface DocumentationCardProps {
  className?: string;
}

const DocumentationCard: React.FC<DocumentationCardProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow bg-primary/10', className)}>
      <CardContent className="p-6 flex flex-col items-start space-y-3">
        <div className="flex items-center">
          <BookMarked className="h-6 w-6 mr-3 text-primary" />
          <h3 className="text-lg font-semibold text-primary">
            Explore Our Documentation
          </h3>
        </div>
        <p className="text-sm text-primary/80">
          Find detailed guides, API references, and code samples to help you get the most out of Tabler.
        </p>
        <Button 
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
            onClick={() => window.open('https://tabler.io/docs', '_blank')}
        >
          Read Docs
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DocumentationCard;
