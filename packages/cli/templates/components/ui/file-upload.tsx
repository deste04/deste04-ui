import * as React from "react";
import { FileUpload as ArkFileUpload } from "@ark-ui/react/file-upload";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

const fileUploadVariants = cva("flex w-full flex-col items-start gap-1.5", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface FileUploadProps
  extends ArkFileUpload.RootProps,
    VariantProps<typeof fileUploadVariants> {}

function FileUpload({ className, size = "md", ...props }: Readonly<FileUploadProps>) {
  return (
    <ArkFileUpload.Root
      data-slot="file-upload"
      data-size={size}
      className={cn(fileUploadVariants({ size, className }))}
      {...props}
    />
  );
}

export interface FileUploadLabelProps extends ArkFileUpload.LabelProps {}

function FileUploadLabel({ className, ...props }: Readonly<FileUploadLabelProps>) {
  return (
    <ArkFileUpload.Label
      data-slot="file-upload-label"
      className={cn(
        "text-sm leading-none font-medium select-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export interface FileUploadDropzoneProps extends ArkFileUpload.DropzoneProps {}

function FileUploadDropzone({ className, ...props }: Readonly<FileUploadDropzoneProps>) {
  return (
    <ArkFileUpload.Dropzone
      data-slot="file-upload-dropzone"
      className={cn(
        "flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/40 text-center font-sans text-muted-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-dragging:border-primary data-dragging:bg-primary/5 data-invalid:border-destructive data-invalid:bg-destructive/5 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-6",
        "in-data-[size=sm]:min-h-32 in-data-[size=sm]:gap-1 in-data-[size=sm]:p-4 in-data-[size=sm]:text-xs",
        "in-data-[size=md]:min-h-40 in-data-[size=md]:gap-2 in-data-[size=md]:p-6 in-data-[size=md]:text-sm",
        "in-data-[size=lg]:min-h-48 in-data-[size=lg]:gap-3 in-data-[size=lg]:p-8 in-data-[size=lg]:text-base",
        className
      )}
      {...props}
    />
  );
}

export interface FileUploadTriggerProps extends ArkFileUpload.TriggerProps {}

function FileUploadTrigger({ className, ...props }: Readonly<FileUploadTriggerProps>) {
  return (
    <ArkFileUpload.Trigger
      data-slot="file-upload-trigger"
      className={cn(buttonVariants({ variant: "outline", size: "sm" }), className)}
      {...props}
    />
  );
}

export interface FileUploadClearTriggerProps extends ArkFileUpload.ClearTriggerProps {}

function FileUploadClearTrigger({ className, ...props }: Readonly<FileUploadClearTriggerProps>) {
  return (
    <ArkFileUpload.ClearTrigger
      data-slot="file-upload-clear-trigger"
      className={cn(buttonVariants({ variant: "plain", size: "sm" }), className)}
      {...props}
    />
  );
}

export interface FileUploadItemGroupProps extends ArkFileUpload.ItemGroupProps {}

function FileUploadItemGroup({ className, ...props }: Readonly<FileUploadItemGroupProps>) {
  return (
    <ArkFileUpload.ItemGroup
      data-slot="file-upload-item-group"
      className={cn(
        "flex w-full flex-col items-start",
        "in-data-[size=sm]:gap-2 in-data-[size=md]:gap-3 in-data-[size=lg]:gap-4",
        className
      )}
      {...props}
    />
  );
}

export interface FileUploadItemProps extends ArkFileUpload.ItemProps {}

function FileUploadItem({ className, ...props }: Readonly<FileUploadItemProps>) {
  return (
    <ArkFileUpload.Item
      data-slot="file-upload-item"
      className={cn(
        "relative flex w-full items-center rounded-lg border border-border bg-card font-sans animate-in fade-in duration-200 data-disabled:pointer-events-none data-disabled:opacity-50 data-rejected:border-destructive/40 data-rejected:bg-destructive/5",
        "in-data-[size=sm]:gap-2 in-data-[size=sm]:p-3 in-data-[size=sm]:text-xs",
        "in-data-[size=md]:gap-3 in-data-[size=md]:p-4 in-data-[size=md]:text-sm",
        "in-data-[size=lg]:gap-4 in-data-[size=lg]:p-5 in-data-[size=lg]:text-base",
        className
      )}
      {...props}
    />
  );
}

export interface FileUploadItemPreviewProps extends ArkFileUpload.ItemPreviewProps {}

function FileUploadItemPreview({ className, ...props }: Readonly<FileUploadItemPreviewProps>) {
  return (
    <ArkFileUpload.ItemPreview
      data-slot="file-upload-item-preview"
      className={cn(
        "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted text-muted-foreground [&_svg:not([class*='size-'])]:size-5",
        className
      )}
      {...props}
    />
  );
}

export interface FileUploadItemPreviewImageProps extends ArkFileUpload.ItemPreviewImageProps {}

function FileUploadItemPreviewImage({
  className,
  ...props
}: Readonly<FileUploadItemPreviewImageProps>) {
  return (
    <ArkFileUpload.ItemPreviewImage
      data-slot="file-upload-item-preview-image"
      className={cn("size-full object-cover", className)}
      {...props}
    />
  );
}

export interface FileUploadItemNameProps extends ArkFileUpload.ItemNameProps {}

function FileUploadItemName({ className, ...props }: Readonly<FileUploadItemNameProps>) {
  return (
    <ArkFileUpload.ItemName
      data-slot="file-upload-item-name"
      className={cn("min-w-0 flex-1 truncate font-medium text-foreground", className)}
      {...props}
    />
  );
}

export interface FileUploadItemSizeTextProps extends ArkFileUpload.ItemSizeTextProps {}

function FileUploadItemSizeText({ className, ...props }: Readonly<FileUploadItemSizeTextProps>) {
  return (
    <ArkFileUpload.ItemSizeText
      data-slot="file-upload-item-size-text"
      className={cn("shrink-0 text-muted-foreground", className)}
      {...props}
    />
  );
}

export interface FileUploadItemDeleteTriggerProps extends ArkFileUpload.ItemDeleteTriggerProps {}

function FileUploadItemDeleteTrigger({
  className,
  ...props
}: Readonly<FileUploadItemDeleteTriggerProps>) {
  return (
    <ArkFileUpload.ItemDeleteTrigger
      data-slot="file-upload-item-delete-trigger"
      aria-label="Remove file"
      className={cn(
        "ms-auto flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      <X className="size-3.5" />
    </ArkFileUpload.ItemDeleteTrigger>
  );
}

const FileUploadHiddenInput = ArkFileUpload.HiddenInput;
const FileUploadContext = ArkFileUpload.Context;

export {
  FileUpload,
  FileUploadLabel,
  FileUploadDropzone,
  FileUploadTrigger,
  FileUploadClearTrigger,
  FileUploadItemGroup,
  FileUploadItem,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemName,
  FileUploadItemSizeText,
  FileUploadItemDeleteTrigger,
  FileUploadHiddenInput,
  FileUploadContext,
  fileUploadVariants,
};
