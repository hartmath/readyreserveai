export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      automation_configs: {
        Row: {
          api_key: string | null
          automation_id: string | null
          created_at: string | null
          custom_prompt: string | null
          enabled: boolean | null
          id: string
          schedule: string | null
          updated_at: string | null
          user_id: string
          webhook_url: string | null
        }
        Insert: {
          api_key?: string | null
          automation_id?: string | null
          created_at?: string | null
          custom_prompt?: string | null
          enabled?: boolean | null
          id?: string
          schedule?: string | null
          updated_at?: string | null
          user_id: string
          webhook_url?: string | null
        }
        Update: {
          api_key?: string | null
          automation_id?: string | null
          created_at?: string | null
          custom_prompt?: string | null
          enabled?: boolean | null
          id?: string
          schedule?: string | null
          updated_at?: string | null
          user_id?: string
          webhook_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "automation_configs_automation_id_fkey"
            columns: ["automation_id"]
            isOneToOne: false
            referencedRelation: "automations"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_logs: {
        Row: {
          automation_id: string | null
          created_at: string | null
          duration_ms: number | null
          id: string
          input_data: Json | null
          message: string | null
          output_data: Json | null
          status: string
          user_id: string
        }
        Insert: {
          automation_id?: string | null
          created_at?: string | null
          duration_ms?: number | null
          id?: string
          input_data?: Json | null
          message?: string | null
          output_data?: Json | null
          status: string
          user_id: string
        }
        Update: {
          automation_id?: string | null
          created_at?: string | null
          duration_ms?: number | null
          id?: string
          input_data?: Json | null
          message?: string | null
          output_data?: Json | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_logs_automation_id_fkey"
            columns: ["automation_id"]
            isOneToOne: false
            referencedRelation: "automations"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_usage: {
        Row: {
          automation_id: string | null
          created_at: string | null
          id: string
          month: string
          tasks_count: number | null
          user_id: string
        }
        Insert: {
          automation_id?: string | null
          created_at?: string | null
          id?: string
          month: string
          tasks_count?: number | null
          user_id: string
        }
        Update: {
          automation_id?: string | null
          created_at?: string | null
          id?: string
          month?: string
          tasks_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_usage_automation_id_fkey"
            columns: ["automation_id"]
            isOneToOne: false
            referencedRelation: "automations"
            referencedColumns: ["id"]
          },
        ]
      }
      automations: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          features: Json | null
          id: string
          is_popular: boolean | null
          rating: number | null
          title: string
          updated_at: string | null
          user_count: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_popular?: boolean | null
          rating?: number | null
          title: string
          updated_at?: string | null
          user_count?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_popular?: boolean | null
          rating?: number | null
          title?: string
          updated_at?: string | null
          user_count?: number | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          message: string
          status: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          message: string
          status?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string
          status?: string | null
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          id: string
          status: string | null
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          status?: string | null
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          status?: string | null
          subscribed_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company: string | null
          created_at: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_automations: {
        Row: {
          activated_at: string | null
          automation_id: string | null
          id: string
          status: string | null
          user_id: string
        }
        Insert: {
          activated_at?: string | null
          automation_id?: string | null
          id?: string
          status?: string | null
          user_id: string
        }
        Update: {
          activated_at?: string | null
          automation_id?: string | null
          id?: string
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_automations_automation_id_fkey"
            columns: ["automation_id"]
            isOneToOne: false
            referencedRelation: "automations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
