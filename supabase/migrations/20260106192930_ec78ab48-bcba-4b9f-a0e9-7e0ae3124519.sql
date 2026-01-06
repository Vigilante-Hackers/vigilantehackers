-- Update handle_new_user function to add input validation for username
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  v_username TEXT;
BEGIN
  v_username := NEW.raw_user_meta_data ->> 'username';
  
  -- Validate username length and format
  IF v_username IS NOT NULL THEN
    v_username := TRIM(v_username);
    -- Truncate to max 50 characters
    IF LENGTH(v_username) > 50 THEN
      v_username := LEFT(v_username, 50);
    END IF;
    -- Remove potentially problematic characters - only allow alphanumeric and underscore
    v_username := REGEXP_REPLACE(v_username, '[^a-zA-Z0-9_]', '', 'g');
    -- If username becomes empty after sanitization, set to null
    IF LENGTH(v_username) = 0 THEN
      v_username := NULL;
    END IF;
  END IF;
  
  INSERT INTO public.profiles (user_id, username)
  VALUES (NEW.id, v_username);
  RETURN NEW;
END;
$$;